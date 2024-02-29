import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 9h-4.5q-.703.047-.75.75v4.5q.046.703.75.75h4.5q.704-.047.75-.75v-4.5q-.046-.703-.75-.75m-4.5-1.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 14.25v-4.5q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 7.5M6.75 21h-4.5q-.703.046-.75.75v4.5q.046.704.75.75h4.5q.704-.046.75-.75v-4.5q-.046-.704-.75-.75m-4.5-1.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 26.25v-4.5q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 19.5m12-10.5q-.703.047-.75.75v4.5q.047.703.75.75h4.5q.704-.047.75-.75v-4.5q-.046-.703-.75-.75zM12 9.75q.047-.937.656-1.594A2.45 2.45 0 0 1 14.25 7.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 12 14.25zm0 10.5q.047-.704.75-.75h3q.704.046.75.75v3.188h3V20.25q.046-.704.75-.75.704.046.75.75v3.938q-.046.702-.75.75h-4.5q-.703-.048-.75-.75V21h-1.5v7.125q-.047.704-.75.75-.703-.046-.75-.75zm-7.875-9.375h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.703-.047-.75-.75v-.75q.046-.703.75-.75m-.75 12.75q.046-.704.75-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.703-.046-.75-.75zm12.75-12.75h.75q.704.047.75.75v.75q-.046.703-.75.75h-.75q-.703-.047-.75-.75v-.75q.047-.703.75-.75M15 27q.047-.704.75-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.703-.046-.75-.75zm4.5-.75h.75q.704.046.75.75v.75q-.046.704-.75.75h-.75q-.704-.046-.75-.75V27q.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='ce0bbad81189ed078ae613c45b6b0b30__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeXlRegularIcon);
export default ForwardRef;
