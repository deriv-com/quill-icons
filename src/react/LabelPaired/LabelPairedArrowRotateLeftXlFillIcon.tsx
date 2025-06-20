import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftXlFillIcon = (
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
      <path d='M5.86 13.5h2.39c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 .75 15V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v2.438l.797-.844a10.553 10.553 0 0 1 14.86 0 10.553 10.553 0 0 1 0 14.86 10.553 10.553 0 0 1-14.86 0c-.563-.61-.563-1.548 0-2.11.61-.61 1.547-.61 2.11 0a7.583 7.583 0 0 0 10.64 0 7.583 7.583 0 0 0 0-10.64 7.583 7.583 0 0 0-10.64 0z' />
    </g>
    <defs>
      <clipPath id='ebb92f4e286f6fd511eadc003075c2fc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftXlFillIcon);
export default ForwardRef;
