import predictor from './gamePredictor';
describe('Game Predictor test', () => {
    it('should return null', () => {
        const gameState = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'O', ''];
        const p = predictor(gameState);
        expect('O').toBe(p);

    });
    it('should return winner X', () => {
        const gameState = ['X', 'X', 'X', 'O', 'O', 'X', 'O', 'O', ''];
        const p = predictor(gameState);
        expect('X').toBe(p);
    });
    // ["O", "X", "X", "O", "", "", "O", "", ""]
    it('should return winner O', () => {
        const gameState = ["O", "X", "X", "O", "", "", "O", "", ""];
        const p = predictor(gameState);
        expect('O').toBe(p);
    });
});