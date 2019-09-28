import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  OrderbookReserve,
  TokenDeposited,
  EtherDeposited,
  FullOrderTaken,
  PartialOrderTaken,
  OrderbookReserveTrade
} from "../generated/templates/OrderbookReserve/OrderbookReserve"
import {
  tokenReserve,
  Kyber,
  orderBookReserveTrade
} from "../generated/schema"

export function handleTokenDeposited(event: TokenDeposited): void {

  let entity = tokenReserve.load(event.address.toHex())
  entity.totalTokenDeposited = entity.totalTokenDeposited.plus(event.params.amount.toBigDecimal())
  entity.save()

  let kyberReservesEntity = Kyber.load('1')
  kyberReservesEntity.permissionlessTotalTokenDeposited = kyberReservesEntity.permissionlessTotalTokenDeposited.plus(event.params.amount.toBigDecimal())
  kyberReservesEntity.save()

  log.error(
    'I am in the TokenDeposited {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
}

export function handleEtherDeposited(event: EtherDeposited): void {

  let entity = tokenReserve.load(event.address.toHex())
  entity.totalEtherDeposited = entity.totalEtherDeposited.plus(event.params.amount.toBigDecimal())
  entity.save()

  let kyberReservesEntity = Kyber.load('1')
  kyberReservesEntity.permissionlessTotalEtherDeposited = kyberReservesEntity.permissionlessTotalEtherDeposited.plus(event.params.amount.toBigDecimal())
  kyberReservesEntity.save()

  log.error(
    'I am in the EtherDeposited {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
}

export function handleFullOrderTaken(event: FullOrderTaken): void {
  log.error(
    'I am in the handleFullOrderTaken {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
}

export function handlePartialOrderTaken(event: PartialOrderTaken): void {
  log.error(
    'I am in the PartialOrderTaken {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
}

export function handleOrderbookReserveTrade(event: OrderbookReserveTrade): void {

  let kyberReservesEntity = Kyber.load('1')
  kyberReservesEntity.permissionlessReserveTrades = kyberReservesEntity.permissionlessReserveTrades + 1
  kyberReservesEntity.save()

  let orderBookReserveTradeEntity = new orderBookReserveTrade(event.transaction.from.toHex())

  orderBookReserveTradeEntity.tradeTime = event.block.timestamp.toI32()
  orderBookReserveTradeEntity.sourceToken = event.params.srcToken
  orderBookReserveTradeEntity.destinationToken = event.params.dstToken
  orderBookReserveTradeEntity.sourceAmount = event.params.srcAmount
  orderBookReserveTradeEntity.destinationAmount = event.params.dstAmount


  orderBookReserveTradeEntity.save()

  log.error(
    'I am in the OrderbookReserveTrade {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
}
