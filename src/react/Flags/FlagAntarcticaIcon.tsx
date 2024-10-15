import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagAntarcticaIcon = (
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
      fill='#469DD7'
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
      fill='#fff'
      d='M18.824 8.172c-.034-.35.534-1.219.078-1.156-.558.076-.994-.308-1.183-.299.604-.854.156-1.071.021-1.625-.237-.972.52-1.448-.833-1.656-.881-.136-1.489-.044-1.754-1.05-.388.272-.85.34-1.288.149-.28-.122-.367-.355-.63-.467-.2-.085-.617-.084-.84-.12-.616-.097-.933.176-1.485.085.053.08.06.183.097.268-.34.012-.547.24-.584.558-.498-.05-.624.599-.568 1.008l-.052.016.02.02C9.72 4.988 9.278 5.53 8.168 5.7c-.73.112-1.38-.373-2.011-.764a3 3 0 0 1-.511-.417c-.187-.207-.319-.498-.5-.646-.083-.068-.26-.125-.236.014-.115.719.41 1.614 1.015 1.96-.828.382.209.61.358.74.003.003.36.494.362.512.057.351-.185.311-.21.592-.026.291-.026.524.071.814l-.02.021c.003.233-.173.15-.403.097.032.708.706.77.819.908.363.446.238 1.095.662 1.51 1.043 1.022 2.23.419 3.411.59.663.097 1.231.653 1.832.025.706.773-.544 1.69-.238 1.951.087.075.179.106.273.112-.017.047-.045.09-.057.14.848.08 1.742.283 2.535-.134-.001.127.084.282.089.349.194-.233.346-.22.594-.343.311-.155.858-.341 1.064-.651.245-.37-.14-.88.632-.721.06-.267.084-.239.226-.416-.212-.534.42-.894.61-1.275.038-.077.04-.435.091-.57.096-.256.37-.399.447-.72.138-.591-.2-.693-.249-1.205'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagAntarcticaIcon);
export default ForwardRef;