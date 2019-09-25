import { BigInt, log } from "@graphprotocol/graph-ts"
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
import {
  OrderbookReserve
} from "../generated/KyberNetwork/OrderbookReserve"
import {
  tokenReserve,
  getKyberTrades,
  getListReserves,
  getEtherReceival
} from "../generated/schema"

export function handleAddReserveToNetwork(event: AddReserveToNetwork): void {
  log.error(
    'I am in the dark {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = tokenReserve.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new tokenReserve(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count.plus(BigInt.fromI32(1))

  // Entity fields can be set based on event parameters
  entity.reserveAddress = event.params.reserve

  //KyberReserve.create(event.params.reserve)

  //let contract1 = KyberReserve.bind(event.params.reserve)
  let contract2 = OrderbookReserve.bind(event.params.reserve)
  //let contract3 = Contract3.bind(event.params.contractAddress)

  //let result1 = contract1.try_conversionRatesContract()
  let result2 = contract2.try_contracts()
  //let result3 = contract3.try_thirdFunction(...)

  // if (result1.reverted) {
  //   log.error("result1 reverted {}", [])
  // } else {
  //   log.error("result1 value", [event.params.reserve.toString()])
  // }

  if (result2.reverted) {
    log.error("result2 reverted", [])
  } else {
    log.error("result2 value {}", [])
  }


  //let kyberReserve = KyberReserve.bind(event.params.reserve)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  //contract.getReserves()

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleListReservePairs(event: ListReservePairs): void {

  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = getListReserves.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new getListReserves(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count.plus(BigInt.fromI32(1))

  // Entity fields can be set based on event parameters
  entity.source = event.params.src

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleKyberTrade(event: KyberTrade): void {
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = getKyberTrades.load(event.transaction.from.toHex())
  //
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new getKyberTrades(event.transaction.from.toHex())
  //
  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }
  //
  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count.plus(BigInt.fromI32(1))
  //
  // // Entity fields can be set based on event parameters
  // entity.traderAddress = event.params.trader
  //
  // // Entities can be written to the store with `.save()`
  // entity.save()
}

export function handleEtherReceival(event: EtherReceival): void {

  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = getEtherReceival.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new getEtherReceival(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count.plus(BigInt.fromI32(1))

  // Entity fields can be set based on event parameters
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  // Entities can be written to the store with `.save()`
  entity.save()
}
