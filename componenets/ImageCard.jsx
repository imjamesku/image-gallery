import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',')
    return (
        <div className="max-w-sm overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="pic" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-blue-600">
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, idx) => <span key={`${image.id}-${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 my-1">{tag}</span>)}
            </div>
        </div>
    )
}

export default ImageCard
