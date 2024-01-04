import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrashSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.242 4.625a.428.428 0 0 0-.383.219l-.41.656h4.102l-.41-.656a.428.428 0 0 0-.383-.219H5.242ZM9.59 5.5H12.188c.273.018.419.164.437.438-.018.273-.164.419-.438.437h-.492l-.71 9.762a1.716 1.716 0 0 1-.547 1.148c-.329.292-.73.447-1.204.465H3.766c-.474-.018-.875-.173-1.204-.465a1.716 1.716 0 0 1-.546-1.148l-.711-9.762H.813c-.274-.018-.42-.164-.438-.438.018-.273.164-.419.438-.437H3.41l.711-1.121c.274-.401.647-.61 1.121-.629h2.516c.474.018.847.228 1.12.629L9.59 5.5Zm1.23.875H2.18l.71 9.68a.82.82 0 0 0 .274.574.818.818 0 0 0 .602.246h5.468a.818.818 0 0 0 .602-.246.821.821 0 0 0 .273-.574l.711-9.68Z'
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
