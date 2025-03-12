import styles from './Card.module.css'
import { Button, Image, Text } from '../components'
import { MouseEventHandler } from 'react'

export interface ICardProps {
    name: string,
    imgSrc: string,
    sizeMin: string,
    sizeMax: string,
    onClick?: MouseEventHandler
}

export const Card = (props:ICardProps) => {
    return (
        <div className={styles.card}>
            <Button type="button" ariaLabel={`inline skate ${props.name}`} onClick={props.onClick}>
            <Image src={props.imgSrc} alt={props.name} ></Image>
            <Text>{props.name}</Text>            
            <Text>Sizes {props.sizeMin} - {props.sizeMax}</Text>            
            </Button>
        </div>
    )
} 