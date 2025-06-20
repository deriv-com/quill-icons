import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedApplePayCaptionIcon = (
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
      <path d='M2.719 7.227c.187-.211.304-.493.281-.797a1.2 1.2 0 0 0-.75.375c-.164.187-.305.492-.258.773.281.024.563-.14.727-.351m.258.398c.164.023.632.07.914.492-.024.024-.54.328-.54.961.024.75.657.985.68.985-.023.023-.117.374-.351.703-.211.304-.422.609-.75.609-.328.023-.446-.187-.82-.187-.376 0-.493.187-.82.21-.33 0-.563-.328-.774-.632-.422-.633-.75-1.735-.328-2.508.234-.375.609-.61 1.03-.61.329 0 .61.211.821.211.188 0 .54-.257.938-.234m2.367-.844h1.71c.891 0 1.5.61 1.5 1.5s-.632 1.5-1.523 1.5h-.984v1.57h-.703zm.703.586v1.828h.82c.61 0 .961-.328.961-.914s-.351-.914-.96-.914zm3.797 4.008c-.656 0-1.102-.375-1.125-.984 0-.586.445-.914 1.289-.961l.867-.047v-.258c0-.375-.234-.586-.68-.586-.351 0-.61.188-.656.469h-.633C8.906 8.422 9.47 8 10.22 8c.82 0 1.336.422 1.336 1.078v2.274h-.657v-.563c-.187.375-.609.586-1.054.586m.187-.54c.492 0 .844-.304.844-.726v-.257l-.773.046c-.446.024-.68.188-.68.493 0 .257.234.445.61.445m2.414 1.759c-.047 0-.234 0-.28-.024v-.539h.21c.328 0 .492-.117.61-.469l.07-.21-1.22-3.329h.75l.845 2.72.843-2.72H15l-1.266 3.493c-.28.82-.609 1.078-1.289 1.078' />
    </g>
    <defs>
      <clipPath id='30c99fc8bbf9dc37f6f9718a506f31e3__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePayCaptionIcon);
export default ForwardRef;
