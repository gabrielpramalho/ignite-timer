import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  overflow: auto;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  &::-webkit-scrollbar {
    width: 0.374rem;
    height: 12.625rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar:horizontal {
    width: 12.625rem;
    height: 0.374rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-500']};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-400']};
  }
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};

      padding: 1rem;
      text-align: left;

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1rem;
      }
      &:last-child {
        padding-right: 1rem;
      }
    }
  }
`
