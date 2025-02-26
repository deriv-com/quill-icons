import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.523 12.766c-.39.351-.976.312-1.289-.079a.933.933 0 0 1 .078-1.328C3.556 8.508 7.813 6.75 12.5 6.75c4.648 0 8.906 1.758 12.148 4.61.391.35.43.937.118 1.328a.933.933 0 0 1-1.328.078A16.5 16.5 0 0 0 12.5 8.625a16.53 16.53 0 0 0-10.977 4.14M12.5 15.5c-2.54 0-4.844.977-6.562 2.578A.933.933 0 0 1 4.609 18a.97.97 0 0 1 .04-1.328c2.07-1.875 4.804-3.047 7.851-3.047 3.008 0 5.742 1.172 7.813 3.047.351.351.39.937.039 1.328a.933.933 0 0 1-1.329.078A9.56 9.56 0 0 0 12.5 15.5m2.188 6.563a2.2 2.2 0 0 1-1.094 1.914c-.703.39-1.524.39-2.188 0-.703-.391-1.094-1.094-1.094-1.915 0-.78.391-1.484 1.094-1.875.664-.39 1.485-.39 2.188 0a2.18 2.18 0 0 1 1.094 1.875' />
    </g>
    <defs>
      <clipPath id='9113c464d78f805176fee4da5169d264__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiLgBoldIcon);
export default ForwardRef;
