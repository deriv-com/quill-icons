import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21 7.5c-1.64.047-3.14.89-3.937 2.297-.797 1.36-.797 3.094 0 4.5.843 1.36 2.296 2.25 3.937 2.25 1.594 0 3.094-.89 3.89-2.25a4.62 4.62 0 0 0 0-4.547C24.095 8.39 22.595 7.5 21 7.5m4.5 8.484A5.96 5.96 0 0 1 21 18c-2.156 0-4.078-1.125-5.11-2.812l-3.75 3.75C13.829 19.968 15 21.844 15 24a5.86 5.86 0 0 1-2.062 4.5H23.25a2.25 2.25 0 0 0 2.25-2.25zM9 28.5c2.484 0 4.5-2.016 4.5-4.5a4.49 4.49 0 0 0-2.86-4.172h-.046A4.4 4.4 0 0 0 9 19.5a4.501 4.501 0 0 0 0 9m1.688-10.219 4.546-4.547C15.047 13.172 15 12.61 15 12c0-3.281 2.672-6 6-6 3.281 0 6 2.719 6 6v14.25c0 2.11-1.687 3.75-3.75 3.75H9c-3.328 0-6-2.672-6-6 0-3.281 2.672-6 6-6q.844 0 1.688.281M7.5 11.25c0-.375.328-.75.75-.75h4.5c.281 0 .563.188.656.469.14.281.047.61-.14.844l-4.5 4.5c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L10.922 12H8.25a.74.74 0 0 1-.75-.75m2.11 9v.563c.796.234 1.312.984 1.312 1.828v.187H9.703v-.187c0-.375-.328-.703-.75-.703a.72.72 0 0 0-.703.703c0 .422.328.75.703.75a1.98 1.98 0 0 1 1.969 1.968c0 .844-.516 1.594-1.313 1.828v.563H8.344v-.562c-.797-.235-1.313-.985-1.313-1.829v-.187H8.25v.187a.72.72 0 0 0 .703.703c.422 0 .75-.328.75-.703a.74.74 0 0 0-.75-.75c-1.078 0-1.922-.89-1.922-1.968 0-.844.516-1.594 1.313-1.828v-.563zM20.25 8.484v1.032h.984V8.484h.985v1.032c.375 0 .75.14.984.375.61.562.656 1.5.094 2.109.281.281.422.656.422 1.031 0 .844-.703 1.5-1.5 1.5v.985h-.985v-.985h-.984v.985h-1.031v-.985h-.985V13.5h.985v-3h-.985v-.984h.985V8.484zm1.969 4.032H20.25v.984h1.969a.52.52 0 0 0 .515-.516c0-.234-.234-.468-.515-.468m0-2.016H20.25v1.031h1.969a.52.52 0 0 0 .515-.515.52.52 0 0 0-.515-.516' />
    </g>
    <defs>
      <clipPath id='73dffc3f706a41c140000b4cf0c74ef4__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampXlRegularIcon);
export default ForwardRef;
