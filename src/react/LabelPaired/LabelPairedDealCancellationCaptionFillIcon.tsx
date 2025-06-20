import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationCaptionFillIcon = (
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
      <path d='M9.422 12.945v-.023l.023.023c.375.14.82.211 1.266.211.656 0 1.219-.14 1.664-.445q.668-.458 1.055-1.266l.14-.304-1.804-1.055-.141.422c-.07.187-.187.375-.352.515-.117.094-.28.165-.562.165-.305 0-.516-.094-.68-.258s-.258-.446-.258-.89V9.03c0-.445.094-.703.258-.867.164-.187.375-.281.68-.281s.445.07.539.14c.117.118.21.258.281.47l.14.421 1.876-.984-.14-.328q-.353-.844-1.055-1.266c-.446-.305-1.008-.422-1.641-.422-.469 0-.89.07-1.29.234a2.9 2.9 0 0 0-1.007.75 3.1 3.1 0 0 0-.633 1.172c-.14.446-.21.961-.21 1.524 0 .562.07 1.054.21 1.5v.023q.21.633.633 1.125c.281.305.61.54 1.008.703M4.266 6.031c.445 0 .89.07 1.265.211.399.164.75.375 1.032.703.28.305.492.68.632 1.102.14.445.211.937.211 1.5 0 .539-.07 1.055-.21 1.476v.024c-.141.422-.352.797-.633 1.101-.282.305-.633.54-1.032.68-.375.164-.797.235-1.265.235H1.523V6.03zm.703 4.828c.14-.14.234-.375.234-.843v-.961c0-.47-.094-.703-.234-.82-.14-.165-.352-.258-.703-.258h-.61v3.117h.61c.351 0 .562-.094.703-.235' />
    </g>
    <defs>
      <clipPath id='6d9a1bf2acaacd9f5873511d9d8da445__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationCaptionFillIcon);
export default ForwardRef;
