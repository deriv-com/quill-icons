import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalXlRegularIcon = (
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
      <path d='M27.75 6.75v22.5q-.046.704-.75.75-.704-.046-.75-.75V6.75q.046-.703.75-.75.704.046.75.75M21 10.5q.704.047.75.75v18q-.046.704-.75.75-.704-.046-.75-.75v-18q.046-.703.75-.75m-5.25 5.25v13.5q-.047.704-.75.75-.703-.046-.75-.75v-13.5q.047-.703.75-.75.703.047.75.75M9 19.5q.703.046.75.75v9q-.047.704-.75.75-.703-.046-.75-.75v-9q.047-.704.75-.75M3 24q.704.046.75.75v4.5q-.046.704-.75.75-.703-.046-.75-.75v-4.5q.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='a02231535b21f14992cc0311427de931__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlRegularIcon);
export default ForwardRef;
