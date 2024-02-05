import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.5 7.5q.704 0 1.031.61l3.75 7.5q.328.984-.515 1.546-.985.328-1.5-.515l-.657-1.266h-4.218l-.657 1.266q-.515.89-1.5.515-.89-.562-.515-1.547l3.75-7.5q.374-.562 1.031-.609m-.984 5.625h1.968l-.984-1.969zM6.703 7.828q.797-.656 1.594 0l4.5 4.5q.656.797 0 1.594-.797.656-1.594 0l-2.578-2.578v16.031Q8.532 28.407 7.5 28.5q-1.03-.093-1.125-1.125V11.344l-2.578 2.578q-.797.656-1.594 0-.655-.797 0-1.594zM16.5 19.5h6q.704.047 1.031.656.281.657-.187 1.219l-4.36 4.875H22.5q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-6q-.703-.047-1.031-.656-.282-.657.187-1.219l4.36-4.875H16.5q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='6e87e1b30cdba971285b6cf988e19ddf__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZXlBoldIcon);
export default ForwardRef;
