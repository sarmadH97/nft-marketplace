import { useState } from 'react'
import ButtonTab from './ButtonTab'
import { artists } from '../constants';
import ArtistCard from './ArtistCard';

const Artists = () => {

    const [artistsPageNumber, setArtistsPageNumber] = useState(1);
    const [artistsPageSize, setArtistsPageSize] = useState(4);

    const [tabs, setTabs] = useState([
        {
            Text: 'Popular',
            IsActive: true
        },
        {
            Text: 'Following',
            IsActive: true
        }
    ])

    function paginate(data, currentPage, pageSize) {
        // Handle invalid page numbers (less than 1)
        if (currentPage < 1) {
          throw new Error('Current page must be a positive number');
        }
      
        // Calculate the skip index based on page number and page size
        const skip = (currentPage - 1) * pageSize;
      
        // Use slice to extract the desired page of data
        const paginatedData = data.slice(skip, skip + pageSize);
      
        return paginatedData;
    }

    return (
        <section className='mt-9 mb-5 w-full flex justify-center'>
            <div className='w-[90%]'>
                <h1 className='font-sans font-semibold ss:text-[50px] text-[25px] ss:leading-[100.8px] leading-[75px] text-gradient text-center'>Top List Artist</h1>
                
                <div className='w-full flex justify-center items-center'>
                    <ButtonTab buttons={tabs} styles={'bg-dimBlue rounded py-2 w-[15%]'} />
                </div>
                
                <div className='mt-9 flex flex-row items-center'>
                    {paginate(artists, artistsPageNumber, artistsPageSize).map((artist, index) => (
                        <div key={artist.id} className='flex-1 w-full flex justify-center'>
                            <ArtistCard artist={artist} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Artists