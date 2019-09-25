import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  OrderbookReserve,
  TokenDeposited
} from "../generated/templates/OrderbookReserve/OrderbookReserve"
import {
  tokenReserve
} from "../generated/schema"

export function handleTokenDeposited(event: TokenDeposited): void {
  log.error(
    'I am in the TokenDeposited {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
}
