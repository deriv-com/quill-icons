import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.219 9.14-5.625 5.297c-.094.094-.094.141-.094.235 0 .187.14.328.328.328h11.297c.188 0 .375-.14.375-.328a.26.26 0 0 0-.14-.235L7.733 9.142A.26.26 0 0 0 7.5 9q-.21 0-.281.14M6.187 8.017c.329-.328.797-.516 1.313-.516.469 0 .938.188 1.266.516l5.625 5.343c.375.329.609.844.609 1.313 0 1.031-.844 1.828-1.875 1.828H1.828A1.8 1.8 0 0 1 0 14.672c0-.469.188-.985.563-1.313z' />
    </g>
    <defs>
      <clipPath id='46a753ac78b5872f0e557f293ef35333__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpXlRegularIcon);
export default ForwardRef;
