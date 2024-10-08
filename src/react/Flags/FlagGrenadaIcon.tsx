import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagGrenadaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#CE1126'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#FCD116'
      fillRule='evenodd'
      d='m12 1.423-.487.256.092-.543-.394-.384.545-.079L12 .18l.244.494.545.079-.395.385.093.542M6 1.423l-.487.256.093-.543-.394-.384.545-.079L6 .179l.244.494.545.079-.395.385.093.542M6 15.463l-.487.256.093-.543-.394-.385.545-.078.243-.494.244.494.545.079-.395.384.093.543M12 15.462l-.488.257.093-.543-.394-.385.545-.078.244-.494.244.494.545.079-.395.384.093.543M18 1.423l-.488.256.093-.543-.394-.384.545-.079L18 .179l.243.494.545.079-.394.385.092.542M18 15.462l-.488.257.093-.543-.394-.385.545-.078.244-.494.243.494.545.079-.394.384.092.543'
      clipRule='evenodd'
    />
    <path fill='#FCD116' d='M2 2h.011L2 14z' />
    <path
      fill='#FCD116'
      d='M9.239 9.174 2 14h20V2H2.011l7.228 4.825a3.001 3.001 0 0 1 5.522 0L21.989 2 22 14l-7.238-4.826a3.001 3.001 0 0 1-5.523 0'
    />
    <path
      fill='#007A5E'
      d='M9.239 9.174A3 3 0 0 1 9 8c0-.417.085-.814.239-1.175L2.011 2 2 14zM14.762 9.174 22 14l-.011-12-7.228 4.825c.154.36.239.758.239 1.175 0 .416-.085.813-.239 1.174'
    />
    <path
      fill='#CE1126'
      fillRule='evenodd'
      d='M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-4.47 2.262L12 9.489l1.468.773-.28-1.636 1.19-1.16-1.643-.237L12 5.739l-.735 1.489-1.643.237 1.188 1.16z'
      clipRule='evenodd'
    />
    <path
      fill='#FCD116'
      fillRule='evenodd'
      d='m12 9.489-1.47.773.28-1.637-1.188-1.16 1.643-.237.735-1.49.735 1.49 1.643.238-1.19 1.16.28 1.636'
      clipRule='evenodd'
    />
    <path
      fill='#FFD938'
      fillRule='evenodd'
      d='M3.053 8.403c.377.604 1.12.662 1.733 1.01-.367-.489-.259-.283-.364-.662-.048-.26-.043-.545.046-.6.073-.046.312.158.512.323.248.29-.056-.071.443.502 0-.776.413-1.323-.158-1.951-.689-.76-.559-.354-2.141-1.025.165.96-.269 1.25-.071 2.403'
      clipRule='evenodd'
    />
    <path
      fill='#CE1126'
      d='M4.468 8.151c-.089.055-.094.34-.046.6l.665.388-.107-.665c-.2-.165-.439-.369-.512-.323'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagGrenadaIcon);
export default ForwardRef;
