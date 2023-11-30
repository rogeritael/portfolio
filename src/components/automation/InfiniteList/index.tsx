import { InfiniteListContainer } from "./styles";

interface InfiniteListProps {
    children: React.ReactNode
}

export function InfiniteList({ children }: InfiniteListProps){
    return(
        <InfiniteListContainer>
            <div className="rail">
                {children}{children}
            </div>
        </InfiniteListContainer>  
    )
}