import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHuaweiAppGallerySmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.29 11.242-.247.63-.027.054h.574l-.027-.055zm4.429-7.492A3.29 3.29 0 0 1 16 7.031v7.465c0 1.805-1.477 3.254-3.281 3.254H5.254A3.244 3.244 0 0 1 2 14.496V7.031C2 5.227 3.45 3.75 5.254 3.75zm-2.38 7-.41 1.313-.41-1.313h-.382l.629 1.914h.328l.41-1.258.41 1.258h.3l.657-1.914h-.383l-.41 1.313-.41-1.313zm-2.187 0-.82 1.914h.383l.164-.355v-.028h.848l.164.383h.382l-.793-1.887v-.027zm5.825 0v1.914h.382V10.75zm-10.5 0v1.914h.382v-.766h.82v.766h.383V10.75H4.68v.793h-.82v-.793zm3.308 0V11.844c0 .328-.164.492-.41.492-.273 0-.437-.164-.437-.492v-1.067h-.356v1.067c0 .547.273.847.766.847.52 0 .793-.3.793-.847V10.75zm5.387 0v1.914h1.367v-.355h-1.012v-.465h.684v-.356h-.684v-.383h.985v-.355zM6.43 5.992c0 1.34 1.12 2.406 2.488 2.406 1.367 0 2.488-1.066 2.488-2.406h-.355c0 1.149-.957 2.051-2.133 2.051-1.176 0-2.133-.902-2.133-2.05z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiAppGallerySmIcon);
export default ForwardRef;
