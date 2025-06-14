import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.313 13H11c.531 0 1-.437 1-1V6c0-.531-.469-1-1-1H2c-.562 0-1 .469-1 1v6c0 .563.438 1 1 1h1c.531 0 1 .469 1 1v.5l1.719-1.281c.187-.125.375-.219.593-.219M11 14H6.313L3.78 15.906c-.156.125-.344.125-.531.063A.51.51 0 0 1 3 15.5V14H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h9c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2m-1 4c-1.125 0-2-.875-2-2v-1h1v1c0 .563.438 1 1 1h3.656c.219 0 .438.094.594.219L16 18.5V18c0-.531.438-1 1-1h1c.531 0 1-.437 1-1v-6c0-.531-.469-1-1-1h-4V8h4c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2h-1v1.5a.54.54 0 0 1-.281.469c-.188.062-.375.062-.532-.063L13.658 18zM5.75 6.219c-.531 0-.969.312-1.156.781v.031a.524.524 0 0 0 .312.657c.25.093.532-.063.625-.313l.032-.031c0-.094.093-.125.187-.125h1.281c.219 0 .375.156.375.343 0 .157-.062.282-.187.344l-.969.563a.5.5 0 0 0-.25.437v.281c0 .282.219.5.5.5.25 0 .5-.218.5-.5l.719-.437c.437-.219.687-.687.687-1.156 0-.782-.625-1.375-1.375-1.375zm.75 5.625a.61.61 0 0 0 .625-.344.61.61 0 0 0 0-.719c-.125-.219-.375-.375-.625-.344a.68.68 0 0 0-.656.344.61.61 0 0 0 0 .719.63.63 0 0 0 .656.344' />
    </g>
    <defs>
      <clipPath id='f90e2232584b68662af6033bc4ef60f0__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionMdRegularIcon);
export default ForwardRef;
