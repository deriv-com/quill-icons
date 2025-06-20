import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 6.805A2.71 2.71 0 0 1 8.195 9.5c0 1.5-1.218 2.695-2.695 2.695A2.68 2.68 0 0 1 2.805 9.5 2.696 2.696 0 0 1 5.5 6.805m0 4.453c.96 0 1.734-.774 1.734-1.758A1.73 1.73 0 0 0 5.5 7.766c-.984 0-1.758.773-1.758 1.734 0 .984.797 1.758 1.758 1.758M8.922 6.71a.63.63 0 0 0-.633-.633.63.63 0 0 0-.633.633.63.63 0 0 0 .633.633.63.63 0 0 0 .633-.633m1.781.633c.047.867.047 3.468 0 4.336-.047.843-.234 1.57-.844 2.203-.609.61-1.359.797-2.203.844-.867.046-3.468.046-4.336 0-.843-.047-1.57-.235-2.203-.844-.61-.633-.797-1.36-.844-2.203-.046-.867-.046-3.47 0-4.336C.32 6.5.508 5.75 1.117 5.14c.633-.61 1.36-.797 2.203-.844.868-.047 3.47-.047 4.336 0 .844.047 1.594.234 2.203.844.61.609.797 1.359.844 2.203m-1.125 5.25c.281-.68.211-2.32.211-3.094 0-.75.07-2.39-.21-3.094-.188-.445-.54-.82-.985-.984C7.89 5.14 6.25 5.21 5.5 5.21c-.773 0-2.414-.07-3.094.21-.469.188-.82.54-1.008.985-.28.703-.21 2.344-.21 3.094 0 .773-.07 2.414.21 3.094.188.469.54.82 1.008 1.008.68.28 2.32.21 3.094.21.75 0 2.39.07 3.094-.21.445-.188.82-.54.984-1.008' />
    </g>
    <defs>
      <clipPath id='cf741329857685b7838f9daf1ef8a0a5__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramCaptionIcon);
export default ForwardRef;
