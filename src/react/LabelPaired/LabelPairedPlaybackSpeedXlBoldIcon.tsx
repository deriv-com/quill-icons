import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedXlBoldIcon = (
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
      <path d='M23.625 18c0 5.953-4.453 10.828-10.125 11.531v-2.25c4.453-.703 7.875-4.593 7.875-9.281 0-4.64-3.422-8.531-7.875-9.234V6.469c5.672.75 10.125 5.625 10.125 11.531m-17.11-7.594-1.64-1.594A11.83 11.83 0 0 1 10.5 6.47v2.297C9 9 7.64 9.563 6.516 10.406m-2.156 2.11A9.36 9.36 0 0 0 2.72 16.5H.469c.234-2.062 1.078-3.984 2.297-5.578zm0 10.968-1.593 1.641C1.546 23.531.703 21.609.469 19.5h2.25c.234 1.5.797 2.86 1.64 3.984m2.157 2.157a9.45 9.45 0 0 0 3.984 1.64v2.25c-2.11-.234-4.031-1.078-5.625-2.297zm2.672-13.875c.374-.188.843-.141 1.171.093l7.5 5.25c.328.188.47.563.47.891 0 .375-.142.75-.47.938l-7.5 5.25a1.17 1.17 0 0 1-1.171.093c-.329-.187-.563-.61-.563-1.031v-10.5c0-.375.234-.797.563-.984m1.687 3.187v6.14L15.281 18z' />
    </g>
    <defs>
      <clipPath id='31702d0ef4c09ab33a475436abe1cece__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedXlBoldIcon);
export default ForwardRef;
