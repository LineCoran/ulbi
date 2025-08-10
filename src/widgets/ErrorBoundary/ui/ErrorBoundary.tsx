import React, { ErrorInfo, Suspense } from 'react';
import { PageError } from '@src/widgets/PageError/';

interface IProps {
    children: React.ReactNode;
}

interface IState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.error(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(errorInfo);
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback=''>
                    <PageError />
                </Suspense>
            );
        }

        return this.props.children;
    }
}