import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.273 7.578v5.063H3.891V7.578H2.203V6.36h4.758v1.22zm2.625 5.063V6.359h2.977c.281 0 .563.07.797.164s.422.235.586.399c.164.187.305.398.398.656a2.84 2.84 0 0 1 0 1.617 1.7 1.7 0 0 1-.398.633 2.2 2.2 0 0 1-.586.422c-.235.094-.492.14-.797.14H9.281v2.25zm1.383-3.446h1.43c.21 0 .375-.047.469-.164.14-.094.187-.258.187-.469v-.374c0-.211-.047-.376-.187-.47-.094-.116-.258-.163-.47-.163H9.282z' />
    </g>
    <defs>
      <clipPath id='fe6aea4a694984f94cfd836ffea36267__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitCaptionBoldIcon);
export default ForwardRef;
