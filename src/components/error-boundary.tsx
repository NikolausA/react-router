import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error);
    console.log(errorInfo);
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h4>Something went wrong!</h4>
          <p>{this.state.error?.message}</p>{" "}
        </div>
      );
    }

    return this.props.children;
  }
}
