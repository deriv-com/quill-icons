import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtXlRegularIcon = (
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
      <path d='M12 7.5C6.188 7.5 1.5 12.234 1.5 18c0 5.813 4.688 10.5 10.5 10.5.375 0 .75.375.75.75 0 .422-.375.75-.75.75-6.656 0-12-5.344-12-12C0 11.39 5.344 6 12 6c6.61 0 12 5.39 12 12v1.125a4.13 4.13 0 0 1-4.125 4.125c-1.594 0-2.953-.844-3.656-2.156A5.17 5.17 0 0 1 12 23.25 5.24 5.24 0 0 1 6.75 18c0-2.86 2.344-5.25 5.25-5.25 1.453 0 2.766.61 3.75 1.594v-.094c0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.875a2.62 2.62 0 0 0 2.625 2.625c1.406 0 2.625-1.172 2.625-2.625V18c0-5.766-4.734-10.5-10.5-10.5M15.75 18c0-1.312-.75-2.531-1.875-3.234-1.172-.657-2.625-.657-3.75 0C8.953 15.469 8.25 16.688 8.25 18c0 1.36.703 2.578 1.875 3.281 1.125.657 2.578.657 3.75 0C15 20.578 15.75 19.36 15.75 18' />
    </g>
    <defs>
      <clipPath id='86c453ddd6971fe7e334f058b2f76487__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtXlRegularIcon);
export default ForwardRef;
