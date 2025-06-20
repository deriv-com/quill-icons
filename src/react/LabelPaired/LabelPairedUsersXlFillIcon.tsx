import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersXlFillIcon = (
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
      <path d='M6.75 6c1.313 0 2.531.75 3.234 1.875.657 1.172.657 2.625 0 3.75C9.281 12.797 8.063 13.5 6.75 13.5c-1.36 0-2.578-.703-3.281-1.875-.656-1.125-.656-2.578 0-3.75C4.172 6.75 5.39 6 6.75 6M24 6c1.313 0 2.531.75 3.234 1.875.657 1.172.657 2.625 0 3.75C26.531 12.797 25.312 13.5 24 13.5c-1.36 0-2.578-.703-3.281-1.875-.657-1.125-.657-2.578 0-3.75C21.422 6.75 22.64 6 24 6M0 20.016C0 17.25 2.203 15 4.969 15h2.015c.75 0 1.454.188 2.11.469C9 15.797 9 16.172 9 16.5c0 1.828.75 3.422 2.016 4.5H.984A.96.96 0 0 1 0 20.016M18.984 21h-.047c1.266-1.078 2.016-2.672 2.016-4.5 0-.328 0-.703-.047-1.031A4.9 4.9 0 0 1 22.97 15h2.015A5.02 5.02 0 0 1 30 20.016c0 .562-.469.984-1.031.984zM10.5 16.5c0-1.594.844-3.047 2.25-3.89 1.36-.797 3.094-.797 4.5 0 1.36.843 2.25 2.296 2.25 3.89 0 1.64-.89 3.094-2.25 3.938-1.406.796-3.14.796-4.5 0-1.406-.844-2.25-2.297-2.25-3.938M6 28.781c0-3.468 2.766-6.281 6.234-6.281h5.485A6.28 6.28 0 0 1 24 28.781c0 .657-.562 1.219-1.266 1.219H7.22A1.21 1.21 0 0 1 6 28.781' />
    </g>
    <defs>
      <clipPath id='007ae52548dc3410268e0de4aecb9ab4__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersXlFillIcon);
export default ForwardRef;
