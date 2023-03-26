import DoctorDatas from './DoctorDatas'
import  DoctorCard from './DoctorCard'
import React,{useState} from 'react'

export const DoctorIntro = () =>{
    const Doctors = DoctorDatas.map(Doctor => {
        return(
        <DoctorCard 
          key={Doctor.id}
          Doctor={Doctor}
        />
        )
      })
    
    return(
       <main>
        <div className="container-fluid px-0">
            <div className="SectionNVien py-5">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-8 col-md-6 col-sm-12 col-12 order-lg-0 order-sm-0 order-0 introNhanvien">
                            <h2>Đội ngũ</h2>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 order-lg-1 order-sm-2 order-2 text-end">
                            <button className="button1 w-100" > <a href="">Tìm hiểu thêm</a></button>
                        </div>
                        <div className="col-12 order-lg-1 order-sm-1 order-1 introNhanvien">
                            <h1>Nhân viên Dental</h1>
                            <p>Chúng tôi là một đội ngũ bao gồm các bác sĩ, điều dưỡng và lễ tân làm việc cùng nhau để đảm bảo rằng bạn nhận được sự điều trị tốt nhất khi bạn cần</p>
                        </div>
                        
                        <div className="col-12 order-4 px-0 mx-0">
                            <div className="row px-0 mx-0">
                                {Doctors}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


       </main>
    )    
}
export default DoctorIntro