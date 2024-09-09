import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 6.75a1.56 1.56 0 0 1 1.328.781l8.438 14.375c.273.508.273 1.094 0 1.563a1.48 1.48 0 0 1-1.328.781H1.563c-.586 0-1.094-.273-1.368-.781-.273-.469-.273-1.055 0-1.563L8.633 7.531A1.58 1.58 0 0 1 10 6.75m0 5a.925.925 0 0 0-.937.938v4.374c0 .547.39.938.937.938.508 0 .938-.39.938-.937v-4.375A.95.95 0 0 0 10 11.75m1.25 8.75c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='9bd276500de25e49c8d56c514b826318__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationLgFillIcon);
export default ForwardRef;
