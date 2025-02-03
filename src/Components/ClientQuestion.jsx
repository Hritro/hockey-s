import clientQuestionImage from "../assets/images/11.png";
export default function ClientQuestion() {
  return (
    <div className="lg:grid grid-cols-3 mt-10 flex flex-col gap-20 items-center border-2 p-10 rounded-xl">
      <div>
        <img src={clientQuestionImage} alt="Client-question" />
      </div>
      <div className="lg:col-span-2 w-full space-y-2">
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />  
            <div className="collapse-title text-xl font-bold">
                Our Equipment
            </div>
            <div className="collapse-content">
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna.</p>
            </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
                Hockey Traning
            </div>
            <div className="collapse-content">
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna.</p>
            </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
                Private Lessons
            </div>
            <div className="collapse-content">
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna.</p>
            </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3"  />
            <div className="collapse-title text-xl font-bold">
                Ski Tourning
            </div>
            <div className="collapse-content">
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna.</p>
            </div>
            </div>
            
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3"  />
            <div className="collapse-title text-xl font-bold">
                Booking
            </div>
            <div className="collapse-content">
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna.</p>
            </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3"/>
            <div className="collapse-title text-xl font-bold">
                Pricing
            </div>
            <div className="collapse-content">
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit enim sagittis turpis in magna.</p>
            </div>
            </div>
      </div>
    </div>
  );
}
