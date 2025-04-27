import React from 'react'
import CourseTaughtCard from './CourseTaughtCard'
import teaching from '../data/teachings.json'

const TeachingSection = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '75vh' }}>
            <div style={{ width: '80%' }}>
                <p style={{ fontSize: '30px' }}>Teachings</p>
                <p style={{ fontSize: '18px', color: 'gray' }}>courses taught.</p>
                    <div>
                        {
                            teaching.map((value) => (
                                <CourseTaughtCard
                                college={value.institute}
                                role={value.role}
                                start={value.start}
                                end={value.end}
                                />
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}

export default TeachingSection
