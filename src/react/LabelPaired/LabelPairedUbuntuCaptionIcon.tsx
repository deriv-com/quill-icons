import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUbuntuCaptionIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6 3.688c1.078.015 2.055.28 2.93.796a5.802 5.802 0 0 1 2.086 2.086c.515.875.78 1.852.797 2.93-.016 1.078-.282 2.055-.797 2.93a5.802 5.802 0 0 1-2.086 2.086c-.875.515-1.852.78-2.93.797-1.078-.016-2.055-.282-2.93-.797A5.803 5.803 0 0 1 .984 12.43C.47 11.555.204 10.578.188 9.5c.015-1.078.28-2.055.796-2.93A5.803 5.803 0 0 1 3.07 4.484c.875-.515 1.852-.78 2.93-.796m1.242 2.18a.66.66 0 0 0-.07.562.815.815 0 0 0 .328.468.847.847 0 0 0 .586.07.824.824 0 0 0 .445-.35.793.793 0 0 0 .07-.563.71.71 0 0 0-.351-.47.793.793 0 0 0-.562-.07.705.705 0 0 0-.446.352M2.227 10.25a.73.73 0 0 0 .539-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21.701.701 0 0 0-.515.21.73.73 0 0 0-.211.54c0 .219.07.398.21.54.142.14.313.21.517.21m.68.07a3.243 3.243 0 0 0 1.312 1.852l.562-.938c-.61-.453-.914-1.03-.914-1.734 0-.703.305-1.281.914-1.734l-.562-.938A3.243 3.243 0 0 0 2.906 8.68c.25.234.375.508.375.82 0 .328-.125.602-.375.82m5.343 3.094a.71.71 0 0 0 .352-.469.793.793 0 0 0-.07-.562.825.825 0 0 0-.446-.352.847.847 0 0 0-.586.07.728.728 0 0 0-.328.47.66.66 0 0 0 .07.562c.11.187.258.305.446.351a.794.794 0 0 0 .562-.07m.023-1.64c.547-.547.86-1.235.938-2.063l-1.078-.024c-.11.75-.461 1.305-1.055 1.665-.61.343-1.266.375-1.969.093l-.539.938c.563.25 1.055.36 1.477.328.422-.031.687-.07.797-.117.062-.344.234-.594.515-.75.282-.156.586-.18.914-.07m-.14-2.461 1.078-.024c-.078-.828-.399-1.516-.961-2.062-.312.109-.61.085-.89-.07-.282-.157-.454-.407-.516-.75H6.82c-.093-.048-.351-.087-.773-.118-.422-.031-.914.078-1.477.328l.54.961c.702-.297 1.359-.273 1.968.07.594.36.945.915 1.055 1.665'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuCaptionIcon);
export default ForwardRef;