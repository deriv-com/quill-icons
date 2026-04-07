import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOptionsCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.688 15.383A1.31 1.31 0 0 1 .375 14.07V10.72c0-.446.352-.82.82-.82h.61a.83.83 0 0 1 .82.82v.89l.703-.703c.422-.422.961-.656 1.547-.656h1.64a.83.83 0 0 1 .82.82v.516c0 .469-.374.82-.82.82H5.25a.93.93 0 0 0-.656.281l-.446.446h.891a.83.83 0 0 1 .82.82v.61a.83.83 0 0 1-.82.82zm9.14-5.79h-.61a.84.84 0 0 1-.843-.843v-.89l-.703.726c-.422.398-.961.633-1.547.633h-1.64a.815.815 0 0 1-.82-.82v-.516a.83.83 0 0 1 .82-.82H6.75a.96.96 0 0 0 .656-.258l.446-.47H6.96a.815.815 0 0 1-.82-.82v-.609a.83.83 0 0 1 .82-.82h3.351c.727 0 1.313.61 1.313 1.336V8.75c0 .469-.352.82-.82.82h.023z' />
    </g>
    <defs>
      <clipPath id='e0b48d9075c4cc47cbe43a96cb5b93ad__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOptionsCaptionFillIcon);
export default ForwardRef;
