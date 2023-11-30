import { InfiniteListItemContainer } from "./styles";

interface InfiniteListItemProps {
    label: string
}

export function InfiniteListItem({ label }: InfiniteListItemProps){
    return(
        <InfiniteListItemContainer>
            {label}
        </InfiniteListItemContainer>  
    )
}