import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.516 19.5H16.5q.657 0 1.078-.422Q18 18.657 18 18V9q0-.656-.422-1.078Q17.157 7.5 16.5 7.5H3q-.656 0-1.078.422Q1.5 8.343 1.5 9v9q0 .657.422 1.078.421.422 1.078.422h1.5q.657 0 1.078.422Q6 20.343 6 21v.75l2.625-1.969q.375-.28.89-.281M16.5 21H9.516l-3.797 2.86a.8.8 0 0 1-.797.046Q4.5 23.72 4.5 23.25V21H3q-1.266-.047-2.11-.89Q.048 19.265 0 18V9q.047-1.266.89-2.11Q1.735 6.048 3 6h13.5q1.266.047 2.11.89.843.844.89 2.11v9q-.047 1.266-.89 2.11-.844.843-2.11.89M15 27q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-1.5h1.5V24q0 .657.422 1.078.421.422 1.078.422h5.484q.516 0 .938.281L24 27.75V27q0-.656.422-1.078.421-.422 1.078-.422H27q.657 0 1.078-.422.422-.421.422-1.078v-9q0-.656-.422-1.078Q27.657 13.5 27 13.5h-6V12h6q1.266.047 2.11.89.843.844.89 2.11v9q-.047 1.266-.89 2.11-.844.843-2.11.89h-1.5v2.25q0 .469-.422.656a.8.8 0 0 1-.797-.047L20.484 27zM8.625 9.281q-1.218.094-1.687 1.219v.047q-.188.656.421.937.704.188.985-.421v-.047q.093-.235.281-.235h1.969q.468.047.515.563a.485.485 0 0 1-.28.469l-1.454.843Q9 12.89 9 13.312v.47q.047.656.75.75.703-.094.75-.75v-.048l1.078-.609q1.032-.61 1.031-1.781 0-.89-.562-1.453a2.26 2.26 0 0 0-1.453-.61zm1.125 8.485q.609 0 .984-.516.33-.562 0-1.125-.375-.516-.984-.516t-.984.516q-.33.563 0 1.125.375.516.984.516' />
    </g>
    <defs>
      <clipPath id='6fc8fbbb1ab140cf__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionXlRegularIcon);
export default ForwardRef;
