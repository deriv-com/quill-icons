import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTakeProfitCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.273 7.578v5.063H3.891V7.578H2.203V6.36h4.758v1.22H5.273Zm2.625 5.063V6.359h2.977c.281 0 .563.07.797.164.234.094.422.235.586.399.164.187.305.398.398.656a2.84 2.84 0 0 1 0 1.617 1.72 1.72 0 0 1-.398.633 2.209 2.209 0 0 1-.586.422c-.235.094-.492.14-.797.14H9.281v2.25H7.898Zm1.383-3.446h1.43c.21 0 .375-.047.469-.164.14-.094.187-.258.187-.469v-.374c0-.211-.047-.376-.187-.47-.094-.116-.258-.163-.47-.163H9.282v1.64Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitCaptionBoldIcon);
export default ForwardRef;
