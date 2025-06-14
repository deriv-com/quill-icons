import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.813 16.344c-.72 0-1.313-.125-1.813-.375s-.906-.594-1.25-1.031l.938-.876c.28.344.625.626.968.813q.516.282 1.219.281.797 0 1.219-.375c.281-.25.406-.562.406-.969 0-.312-.094-.593-.281-.78s-.531-.344-1.031-.438l-.75-.125c-.813-.156-1.407-.406-1.813-.813C4.188 11.281 4 10.75 4 10.094c0-.375.063-.719.188-1 .156-.313.343-.563.593-.75.25-.219.563-.375.938-.5a4.6 4.6 0 0 1 1.218-.157c.625 0 1.157.094 1.625.344.47.188.876.531 1.188.938l-.937.844a2.8 2.8 0 0 0-.782-.688c-.312-.156-.719-.25-1.187-.25S6 8.969 5.75 9.156c-.281.188-.406.469-.406.844s.125.625.312.813q.329.233 1.032.374l.75.157c.812.156 1.437.437 1.812.812.406.375.594.906.594 1.594 0 .375-.063.75-.188 1.063-.156.312-.344.593-.625.812-.25.25-.562.406-.937.531a4.1 4.1 0 0 1-1.281.188m4.656-.157V7.813h1.344V15h3.406v1.188z' />
    </g>
    <defs>
      <clipPath id='d7cd9e4ae3023c04d18a4187ca86038b__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossMdRegularIcon);
export default ForwardRef;
