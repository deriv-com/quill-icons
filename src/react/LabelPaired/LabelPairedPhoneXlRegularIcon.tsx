import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneXlRegularIcon = (
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
      <path d='m17.625 18.89 5.25 2.25q.61.282.938.891.28.563.14 1.219l-1.125 5.25Q22.452 29.907 21 30h-.844a5 5 0 0 0-.656-.047q-5.484-.468-9.89-3.328a21 21 0 0 1-6.985-7.453Q.047 14.625 0 9q.094-1.453 1.5-1.828l5.25-1.125a1.65 1.65 0 0 1 1.219.187q.61.282.89.891l2.25 5.25q.469 1.266-.562 2.203l-1.875 1.547a14.3 14.3 0 0 0 5.203 5.203l1.547-1.875q.938-1.031 2.203-.562M21 28.5q.282 0 .375-.281l1.125-5.25q.046-.329-.234-.422l-5.25-2.25q-.235-.094-.422.094l-1.547 1.922q-.844.843-1.922.328a15.47 15.47 0 0 1-5.766-5.766q-.515-1.079.329-1.922l1.921-1.547q.188-.187.094-.422l-2.25-5.25q-.14-.28-.422-.234l-5.25 1.125Q1.501 8.72 1.5 9q.047 5.437 2.672 9.844a19.2 19.2 0 0 0 6.984 6.984Q15.563 28.452 21 28.5' />
    </g>
    <defs>
      <clipPath id='c591193975ff9a7a8f86f899b4b6bb2c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneXlRegularIcon);
export default ForwardRef;
