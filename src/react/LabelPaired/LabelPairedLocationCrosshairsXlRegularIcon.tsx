import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 6q.703.046.75.75v2.297q3.328.328 5.625 2.578 2.25 2.297 2.578 5.625h2.297q.704.046.75.75-.046.704-.75.75h-2.297q-.328 3.329-2.578 5.625-2.297 2.25-5.625 2.578v2.297q-.047.704-.75.75-.703-.046-.75-.75v-2.297q-3.328-.328-5.625-2.578-2.25-2.296-2.578-5.625H.75Q.047 18.704 0 18q.047-.704.75-.75h2.297q.328-3.328 2.578-5.625 2.297-2.25 5.625-2.578V6.75q.047-.703.75-.75M4.5 18a7.47 7.47 0 0 0 .984 3.75 7.8 7.8 0 0 0 2.766 2.766A7.64 7.64 0 0 0 12 25.5a7.64 7.64 0 0 0 3.75-.984 7.8 7.8 0 0 0 2.766-2.766A7.47 7.47 0 0 0 19.5 18a7.47 7.47 0 0 0-.984-3.75 7.8 7.8 0 0 0-2.766-2.766A7.64 7.64 0 0 0 12 10.5a7.64 7.64 0 0 0-3.75.984 7.8 7.8 0 0 0-2.766 2.766A7.47 7.47 0 0 0 4.5 18M15 18q-.047-1.687-1.5-2.578-1.5-.844-3 0Q9.047 16.312 9 18q.047 1.687 1.5 2.578 1.5.845 3 0 1.453-.89 1.5-2.578m-7.5 0q0-1.218.61-2.25A4.51 4.51 0 0 1 12 13.5a4.51 4.51 0 0 1 3.89 2.25q.61 1.032.61 2.25 0 1.22-.61 2.25A4.51 4.51 0 0 1 12 22.5a4.51 4.51 0 0 1-3.89-2.25A4.34 4.34 0 0 1 7.5 18' />
    </g>
    <defs>
      <clipPath id='4c969bf01f97c036844b0ce9cc070980__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsXlRegularIcon);
export default ForwardRef;
