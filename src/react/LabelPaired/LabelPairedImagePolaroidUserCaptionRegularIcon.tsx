import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserCaptionRegularIcon = (
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
      <path d='M8.125 12.5H1v.75q0 .328.21.54.212.21.54.21h7.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-.75zm-.047-.75H10v-6a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21h-7.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6h1.922q.141-.656.633-1.078.492-.399 1.195-.422h1.5q.703.024 1.195.422.493.421.633 1.078m-4.383 0h3.61q-.282-.703-1.055-.75h-1.5q-.773.047-1.055.75m7.055-6v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25v-7.5q.024-.632.445-1.055.422-.421 1.055-.445h7.5q.633.024 1.055.445.421.423.445 1.055M6.25 8a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54q0 .328.21.54.212.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54M5.5 6.5q.844.024 1.29.75.42.75 0 1.5-.446.726-1.29.75-.843-.024-1.29-.75-.42-.75 0-1.5.447-.726 1.29-.75' />
    </g>
    <defs>
      <clipPath id='c6871cb5c8de3ec2b49ed727e4dc6242__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserCaptionRegularIcon);
export default ForwardRef;
