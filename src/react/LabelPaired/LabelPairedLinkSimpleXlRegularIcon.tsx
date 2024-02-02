import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleXlRegularIcon = (
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
      <path d='M0 18q.094-3.187 2.203-5.297T7.5 10.5h3.75q.703.047.75.75-.047.703-.75.75H7.5q-2.531.047-4.266 1.734Q1.547 15.47 1.5 18q.047 2.532 1.734 4.266Q4.97 23.954 7.5 24h3.75q.703.046.75.75-.047.704-.75.75H7.5q-3.187-.094-5.297-2.203T0 18m27 0q-.094 3.187-2.203 5.297T19.5 25.5h-3.75q-.703-.046-.75-.75.047-.704.75-.75h3.75q2.532-.047 4.266-1.734Q25.454 20.53 25.5 18q-.047-2.531-1.734-4.266Q22.03 12.047 19.5 12h-3.75q-.703-.047-.75-.75.047-.703.75-.75h3.75q3.187.094 5.297 2.203T27 18m-19.875-.75h12.75q.704.046.75.75-.046.704-.75.75H7.125q-.703-.046-.75-.75.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='6bde91590c299d38__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleXlRegularIcon);
export default ForwardRef;
