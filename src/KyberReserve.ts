import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  KyberReserve,
  DepositToken
} from "../generated/templates/KyberReserve/KyberReserve"
import {
  tokenReserve
} from "../generated/schema"

export function handleDepositToken(event: DepositToken): void {
  log.error(
    'I am in the DepositToken {}{}{}',
    [
      event.block.number.toString(),       // "47596000"
      event.block.hash.toHexString(),      // "0x..."
      event.transaction.hash.toHexString() // "0x..."
    ]
  )
}
