import { lazy, ReactElement } from 'react'
import { wrapInSuspense } from 'src/utils/wrapInSuspense'

const PairingDetails = lazy(() => import('src/components/AppLayout/Header/components/ProviderDetails/PairingDetails'))

const MobilePairing = (props: { vertical?: boolean }): ReactElement | null => {
  return false ? wrapInSuspense(<PairingDetails {...props} />) : null
}

export default MobilePairing
