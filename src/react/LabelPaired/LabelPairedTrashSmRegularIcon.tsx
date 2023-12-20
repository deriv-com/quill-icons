import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.242 4.625a.428.428 0 0 0-.383.219l-.41.656h4.102l-.41-.656a.428.428 0 0 0-.383-.219zM9.59 5.5H12.188c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-.493l-.71 9.762a1.716 1.716 0 0 1-.547 1.148c-.329.292-.73.447-1.204.465H3.766c-.474-.018-.875-.173-1.203-.465a1.716 1.716 0 0 1-.547-1.148l-.711-9.762H.813c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438H3.41l.711-1.121c.274-.401.647-.61 1.121-.629h2.516c.474.018.847.228 1.12.629zm1.23.875H2.18l.71 9.68a.82.82 0 0 0 .274.574.818.818 0 0 0 .602.246h5.468a.818.818 0 0 0 .602-.246.821.821 0 0 0 .273-.574z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashSmRegularIcon);
export default ForwardRef;
