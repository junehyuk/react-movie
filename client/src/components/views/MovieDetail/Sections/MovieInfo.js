import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    let { movie } = props;

    return (
        <Descriptions title="영화정보" bordered>
            <Descriptions.Item label="제목">{movie.original_title}</Descriptions.Item>
            <Descriptions.Item label="발매일">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="수익">{movie.revenue}</Descriptions.Item>
            <Descriptions.Item label="상영시간">{movie.runtime}</Descriptions.Item>
            <Descriptions.Item label="평점" span={2}>
                {movie.vote_average}
            </Descriptions.Item>
            <Descriptions.Item label="투표수">{movie.vote_count}</Descriptions.Item>
            <Descriptions.Item label="상영">{movie.status}</Descriptions.Item>
            <Descriptions.Item label="인기">{movie.popularity}</Descriptions.Item>
        </Descriptions>
    )
}

export default MovieInfo
