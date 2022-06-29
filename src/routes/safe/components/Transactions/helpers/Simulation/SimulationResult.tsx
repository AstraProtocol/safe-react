import { Icon, Link, Text } from '@gnosis.pm/safe-react-components'
import { Alert, AlertTitle } from '@material-ui/lab'
import { FETCH_STATUS } from 'src/utils/requests'
import styled from 'styled-components'
import { TenderlySimulation } from './types'

const StyledAlert = styled(Alert)`
  align-items: flex-start;
  width: 100%;

  &.MuiAlert-standardError {
    background-color: #fff3f5;
  }

  &.MuiAlert-standardSuccess {
    background-color: #effaf8;
  }

  & .MuiIconButton-root {
    padding: 3px !important;
  }
`

type SimulationResultProps = {
  simulationRequestStatus: string
  simulation?: TenderlySimulation
  simulationLink?: string
  requestError?: string
  onClose: () => void
}

export const SimulationResult = ({
  simulationRequestStatus,
  simulation,
  simulationLink,
  requestError,
  onClose,
}: SimulationResultProps): React.ReactElement => {
  const isErroneous = !!requestError || !simulation?.simulation.status
  const isSimulationFinished =
    simulationRequestStatus === FETCH_STATUS.SUCCESS || simulationRequestStatus === FETCH_STATUS.ERROR

  return (
    <>
      {isSimulationFinished && (
        <>
          {isErroneous ? (
            <StyledAlert severity="error" onClose={onClose} icon={<Icon type="alert" color="error" size="sm" />}>
              <AlertTitle>
                <Text color={'error'} size="lg">
                  <b>Failed</b>
                </Text>
              </AlertTitle>
              {requestError ? (
                <Text color="error" size="lg">
                  An unexpected error occurred during simulation: <b>{requestError}</b>
                </Text>
              ) : (
                <Text color="inputFilled" size="lg">
                  The batch failed during the simulation throwing error <b>{simulation?.transaction.error_message}</b>{' '}
                  in the contract at <b>{simulation?.transaction.error_info?.address}</b>. Full simulation report is
                  available{' '}
                  <Link href={simulationLink} target="_blank" rel="noreferrer" size="lg">
                    <b>on Tenderly</b>
                  </Link>
                  .
                </Text>
              )}
            </StyledAlert>
          ) : (
            <StyledAlert severity="success" icon={<Icon type="check" color="primary" size="sm" />} onClose={onClose}>
              <AlertTitle>
                <Text color={'primary'} size="lg">
                  <b>Success</b>
                </Text>
              </AlertTitle>
              <Text color="inputFilled" size="lg">
                The batch was successfully simulated. Full simulation report is available{' '}
                <Link href={simulationLink} target="_blank" rel="noreferrer" size="lg">
                  <b>on Tenderly</b>
                </Link>
                .
              </Text>
            </StyledAlert>
          )}
        </>
      )}
    </>
  )
}
