import { BigInt, log, Address, BigDecimal } from "@graphprotocol/graph-ts"
import {
  KyberNetwork,
  AddReserveToNetwork,
  KyberTrade,
  ListReservePairs,
  EtherReceival
} from "../generated/KyberNetwork/KyberNetwork"
import {
  KyberReserve
} from "../generated/KyberNetwork/KyberReserve"
import { OrderbookReserve } from "../generated/KyberNetwork/OrderbookReserve"
import { ERC20 } from "../generated/KyberNetwork/ERC20"
import { ERC20_bytes32 } from "../generated/KyberNetwork/ERC20_bytes32"
import { OrderbookReserve as OrderbookReserveTemplate } from "../generated/templates"
import {
  Kyber,
  tokenReserve,
  allKyberTrade
} from "../generated/schema"

export function handleAddReserveToNetwork(event: AddReserveToNetwork): void {


  if(event.params.isPermissionless){

    let kyberReservesEntity = Kyber.load('1')


    if (kyberReservesEntity == null) {
      kyberReservesEntity = new Kyber('1')
      // Entity fields can be set using simple assignments
      kyberReservesEntity.permissionlessReserveCount = 0
      kyberReservesEntity.permissionlessTotalTokenDeposited = BigDecimal.fromString('0')
      kyberReservesEntity.permissionlessTotalEtherDeposited = BigDecimal.fromString('0')
      kyberReservesEntity.kyberTotalTrades = 0
      kyberReservesEntity.permissionlessReserveTrades = 0
    }
    kyberReservesEntity.permissionlessReserveCount = kyberReservesEntity.permissionlessReserveCount + 1


    let entity = tokenReserve.load(event.params.reserve.toHexString())
    if (entity == null) {
      entity = new tokenReserve(event.params.reserve.toHexString())
      entity.startTime = event.block.timestamp.toI32()
      entity.totalTokenDeposited = BigDecimal.fromString('0')
      entity.totalEtherDeposited = BigDecimal.fromString('0')
    }



    let contract2 = OrderbookReserve.bind(event.params.reserve)
    let result2 = contract2.try_contracts()
    let tokenAddress = result2.value.value1.toHex()
    entity.tokenAddress = result2.value.value1

       log.error("Permissionless Reserve {}", [event.params.reserve.toHexString()])
       log.error("Token Address {}", [tokenAddress])


       //some old tokens like DAI, MKR and MOVI have names and symbols in bytes rather than string
       if(tokenAddress == Address.fromString('0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359').toHex()){
         entity.tokenName = "Dai"
         entity.tokenSymbol = "DAI"
       } else if(tokenAddress == Address.fromString('0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2').toHex()){
         entity.tokenName = "Maker"
         entity.tokenSymbol = "MKR"

       } else if (tokenAddress == Address.fromString('0x623B925b0A57a24EA8dE301F2E3E692cE903f0c3').toHex()){
         entity.tokenName = "MoviToken"
         entity.tokenSymbol = "MOVI"

       }else{
           let tokenContract = ERC20.bind(result2.value.value1)
           let nameOfToken = tokenContract.try_name()
           let symbolOfToken = tokenContract.try_symbol()
           if (nameOfToken.reverted) {
             log.error("nameOfToken reverted {}", [result2.value.value1.toHexString()])
           } else {
             entity.tokenName = nameOfToken.value.toString()
             log.error("Token Name {}", [nameOfToken.value.toString()])
           }
           if (symbolOfToken.reverted) {
             log.error("symbolOfToken reverted {}", [result2.value.value1.toHexString()])
           } else {
             entity.tokenSymbol = symbolOfToken.value.toString()
             log.error("Token Symbol {}", [symbolOfToken.value.toString()])
           }

       }

       OrderbookReserveTemplate.create(event.params.reserve)

    entity.save()
    //kyberReservesEntity.reserves = entity
    kyberReservesEntity.save()
  }

}

export function handleKyberTrade(event: KyberTrade): void {
  let kyberReservesEntity = Kyber.load('1')
  if (kyberReservesEntity == null) {
    kyberReservesEntity = new Kyber('1')
    // Entity fields can be set using simple assignments
    kyberReservesEntity.permissionlessReserveCount = 0
    kyberReservesEntity.permissionlessTotalTokenDeposited = BigDecimal.fromString('0')
    kyberReservesEntity.permissionlessTotalEtherDeposited = BigDecimal.fromString('0')
    kyberReservesEntity.kyberTotalTrades = 0
    kyberReservesEntity.permissionlessReserveTrades = 0
  }
  kyberReservesEntity.kyberTotalTrades = kyberReservesEntity.kyberTotalTrades + 1
  kyberReservesEntity.save()

  let allKyberTradeEntity = new allKyberTrade(event.transaction.from.toHex())

  allKyberTradeEntity.tradeTime = event.block.timestamp.toI32()
  allKyberTradeEntity.trader = event.params.trader
  allKyberTradeEntity.sourceToken = event.params.src
  allKyberTradeEntity.destinationToken = event.params.dest
  allKyberTradeEntity.sourceAmount = event.params.srcAmount
  allKyberTradeEntity.destinationAmount = event.params.dstAmount
  allKyberTradeEntity.destinationAddress = event.params.destAddress
  allKyberTradeEntity.ethWeiValue = event.params.ethWeiValue

  allKyberTradeEntity.save()
}

export function handleListReservePairs(event: ListReservePairs): void {

  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = getListReserves.load(event.transaction.from.toHex())
  //
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new getListReserves(event.transaction.from.toHex())
  //
  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }
  //
  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count.plus(BigInt.fromI32(1))
  //
  // // Entity fields can be set based on event parameters
  // entity.source = event.params.src
  //
  // // Entities can be written to the store with `.save()`
  // entity.save()
}



export function handleEtherReceival(event: EtherReceival): void {

  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = getEtherReceival.load(event.transaction.from.toHex())
  //
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new getEtherReceival(event.transaction.from.toHex())
  //
  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }
  //
  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count.plus(BigInt.fromI32(1))
  //
  // // Entity fields can be set based on event parameters
  // entity.sender = event.params.sender
  // entity.amount = event.params.amount
  //
  // // Entities can be written to the store with `.save()`
  // entity.save()
}
