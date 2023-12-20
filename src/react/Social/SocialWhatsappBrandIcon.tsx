import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialWhatsappBrandIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 40 40'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g filter='url(#a)'>
      <path
        fill='url(#b)'
        d='m4.558 34.246 2.184-7.968a15.376 15.376 0 0 1-2.055-7.684c0-8.48 6.906-15.378 15.378-15.378 4.117 0 7.975 1.604 10.878 4.507a15.283 15.283 0 0 1 4.5 10.878c0 8.48-6.906 15.378-15.378 15.378h-.008c-2.574 0-5.103-.65-7.348-1.872z'
      />
      <path
        fill='url(#c)'
        d='m4 34.667 2.261-8.113a15.863 15.863 0 0 1-2.123-7.96c0-8.785 7.15-15.927 15.935-15.927 4.262 0 8.265 1.657 11.267 4.667A15.794 15.794 0 0 1 36 18.602c0 8.785-7.15 15.927-15.935 15.927h-.008c-2.666 0-5.286-.672-7.616-1.94zm8.838-4.966.482.29a13.276 13.276 0 0 0 6.737 1.85h.008c7.295 0 13.238-5.936 13.238-13.24 0-3.536-1.375-6.86-3.873-9.365a13.138 13.138 0 0 0-9.365-3.88c-7.303 0-13.246 5.935-13.246 13.238 0 2.498.695 4.935 2.024 7.043l.313.505-1.336 4.88z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16.085 11.924c-.298-.664-.611-.68-.894-.687-.23-.008-.497-.008-.764-.008s-.695.1-1.062.497c-.366.397-1.39 1.36-1.39 3.323 0 1.955 1.428 3.85 1.627 4.117.199.267 2.758 4.415 6.799 6.012 3.361 1.33 4.049 1.062 4.774.993.734-.069 2.353-.962 2.69-1.894.328-.932.328-1.727.228-1.895-.099-.168-.366-.267-.764-.466-.397-.198-2.352-1.16-2.72-1.298-.366-.138-.633-.2-.893.198-.267.397-1.031 1.291-1.26 1.559-.23.267-.466.297-.863.099-.398-.199-1.681-.619-3.201-1.979-1.184-1.054-1.986-2.36-2.216-2.757-.229-.398-.022-.611.176-.81.176-.176.397-.466.596-.695.199-.23.267-.398.397-.665s.069-.496-.03-.695c-.1-.199-.879-2.162-1.23-2.949'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient id='b' x1={20} x2={20} y1={34.664} y2={2.665} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#20B038' />
        <stop offset={1} stopColor='#60D66A' />
      </linearGradient>
      <linearGradient id='c' x1={20} x2={20} y1={34.8} y2={2.658} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F9F9F9' />
        <stop offset={1} stopColor='#fff' />
      </linearGradient>
      <filter
        id='a'
        width={40}
        height={40}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1.333} />
        <feGaussianBlur stdDeviation={1.333} />
        <feColorMatrix values='0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.06 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1894_170' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1.333} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values='0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.1 0' />
        <feBlend in2='effect1_dropShadow_1894_170' result='effect2_dropShadow_1894_170' />
        <feBlend in='SourceGraphic' in2='effect2_dropShadow_1894_170' result='shape' />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SocialWhatsappBrandIcon);
export default ForwardRef;
