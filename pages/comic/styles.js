import styled from "styled-components";

export const ComicDetailed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    background-color: #000;
    color: #f2f2f2;
    width: 100%;
    min-height: 90vh;
`

export const ComicImage = styled.img`
    margin: 0 1rem;
`

export const ComicInfos = styled.div`
    width: 100%;
`

export const ComicName = styled.h1`
    font-size: 2rem;
`

export const ComicText = styled.p`
    font-size: 1rem;
`

export const Creators = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ComicCreator = styled.span`
    font-size: 1rem;
`