import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrosoftStoreLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={30}
    viewBox='0 0 24 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.074 10.5V8.273c0-1.367.703-1.796 2.031-2.109 1.993-.469 2.11.82 2.11 1.64V9.68l.508-.078V7.844c0-1.563-.508-2.696-2.696-2.188-1.21.235-2.422.547-2.422 2.578v2.383zm5.117-3.086c-.039-.195-.078-.351-.078-.508 1.524-.195 1.797.235 1.797 1.953v.313l-.469.078v-.469c0-1.054 0-1.562-1.25-1.367m-2.93 1.914c0-1.562.626-1.797 1.407-2.07.039.156.078.312.078.508-.703.312-.976.507-.976 1.562v.664l-.508.078zm-6.327 2.617L17.332 9.25l2.695.977v13.125l-2.695.976-13.398-2.656zm2.89 7.305 2.969.39v-2.85H6.824zm0-2.852h2.969v-2.695l-2.969.43zm3.36 3.282 3.75.547v-3.438h-3.75zm0-3.282h3.75v-3.242l-3.75.547z' />
    </g>
    <defs>
      <clipPath id='775b43a0fcff1e3f8174ee0445dd4150__a'>
        <path d='M0 0h24v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftStoreLgIcon);
export default ForwardRef;
