import { InfiniteListContainer } from "./styles";

interface InfiniteListProps {
    children: React.ReactNode,
    className?: string
}

export function InfiniteList({ children, className }: InfiniteListProps){
    return(
        <InfiniteListContainer className={`infinite_list ${className && className}`}>
            <div className="rail">
                {children}{children}
            </div>
        </InfiniteListContainer>  
    )
}