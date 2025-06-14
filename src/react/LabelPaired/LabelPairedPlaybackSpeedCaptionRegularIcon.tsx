import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedCaptionRegularIcon = (
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
      <path d='M11.625 9.5c0 2.86-2.133 5.227-4.875 5.578v-.75c2.32-.351 4.125-2.39 4.125-4.828A4.87 4.87 0 0 0 6.75 4.695v-.75A5.615 5.615 0 0 1 11.625 9.5M3.117 5.563l-.539-.516A5.34 5.34 0 0 1 5.25 3.945v.75a4.8 4.8 0 0 0-2.133.867M2.063 6.64a4.6 4.6 0 0 0-.891 2.109h-.75a5.34 5.34 0 0 1 1.101-2.648zm0 5.742-.54.539A5.34 5.34 0 0 1 .422 10.25h.75c.117.797.422 1.523.89 2.133m3.187 1.945v.75a5.34 5.34 0 0 1-2.672-1.101l.54-.54c.609.47 1.335.774 2.132.891m-.562-7.781c.117-.07.28-.047.398.023l3.75 2.625A.4.4 0 0 1 9 9.5a.41.41 0 0 1-.164.328l-3.75 2.625a.48.48 0 0 1-.399.024.41.41 0 0 1-.187-.352v-5.25c0-.14.07-.258.188-.328m.562 1.055v3.82L7.969 9.5z' />
    </g>
    <defs>
      <clipPath id='4519ca9af905cd6ad935d6112319c581__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedCaptionRegularIcon);
export default ForwardRef;
